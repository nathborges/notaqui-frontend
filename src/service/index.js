import moment from "moment";
import axios from "../axios/axios";
import getBase64 from "../utils/getBase64";
import getTypeOfFile from "../utils/getTypeOfFile";

let number = 1;

export default {
  async list() {
    const data = await axios.get("/compras/buscar");
    return data;
  },
  async getCnpjData(cnpj) {
    const rawData = await axios.get(`empresas/dados/${cnpj}`);
    if (
      rawData.data.razaoSocial == "Nao encontrado" ||
      !rawData.data.razaoSocial
    ) {
      return null;
    }

    return {
      cnpj: rawData.data.cnpj,
      razaoSocial: rawData.data.razaoSocial,
      naturezaJuridica: rawData.data.naturezaJuridica,
      tipoEmpresa: rawData.data.tipoEmpresa,
      categoria: rawData.data.categoria,
      idTipoEmpresa: rawData.data.idTipoEmpresa,
    };
  },
  async getFileInformation(file) {
    const base64 = await getBase64(file);
    const body = { conteudo: `${base64}` };
    const rawData = await axios.post("/ocr/identificar", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = rawData.data;

    const informacoesNota = {
      cnpj: data.infoPj.cnpj,
      razaoSocial: data.infoPj.razaoSocial,
      naturezaJuridica: data.infoPj.naturezaJuridica,
      tipoEmpresa: data.infoPj.tipoEmpresa,
      valor: data.valor.toFixed(2),
      titulo: `Nota ${number}`,
      data: moment().format("DD/MM/YYYY"),
      categoria: data.infoPj.categoria,
      idTipoEmpresa: data.infoPj.idTipoEmpresa,
      cnpjInvalido: false, 
    };

    if (rawData.data.infoPj.cnpj == "Nao encontrado") {
      informacoesNota.cnpjInvalido = true;
      informacoesNota.razaoSocial = 'Não encontrado';
      informacoesNota.tipoEmpresa = 'Não encontrado';
      informacoesNota.idTipoEmpresa = 'Não encontrado';
      informacoesNota.categoria = 'Não encontrado';
      informacoesNota.cnpj = '';
    }

    number = number + 1;
    return informacoesNota;
  },
  async getFileInformationPdf(file) {
    const base64 = await getBase64(file);
    const body = { conteudo: `${base64}` };
    const rawData = await axios.post("/ocr/identificarPdf", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = rawData.data;

    const informacoesNota = {
      cnpj: data.infoPj.cnpj,
      razaoSocial: data.infoPj.razaoSocial,
      naturezaJuridica: data.infoPj.naturezaJuridica,
      tipoEmpresa: data.infoPj.tipoEmpresa,
      valor: data.valor.toFixed(2),
      titulo: `Nota ${number}`,
      data: moment().format("DD/MM/YYYY"),
      categoria: data.infoPj.categoria,
      idTipoEmpresa: data.infoPj.idTipoEmpresa,
      cnpjInvalido: false, 
    };

    if (rawData.data.infoPj.cnpj == "Nao encontrado") {
      informacoesNota.cnpjInvalido = true;
      informacoesNota.razaoSocial = 'Não encontrado';
      informacoesNota.tipoEmpresa = 'Não encontrado';
      informacoesNota.idTipoEmpresa = 'Não encontrado';
      informacoesNota.categoria = 'Não encontrado';
      informacoesNota.cnpj = '';

    }

    number = number + 1;
    return informacoesNota;
  },
  async sendFile(file) {
    const base64 = await getBase64(file.raw);
    const type = getTypeOfFile(file.raw);
    const nome = file.raw.name || "";

    const body = {
      infoPj: {
        cnpj: file.cnpj,
        razaoSocial: file.razaoSocial,
        naturezaJuridica: file.naturezaJuridica,
        tipoEmpresa: file.tipoEmpresa,
        categoria: file.categoria,
        idTipoEmpresa: file.idTipoEmpresa,
      },
      valor: file.valor,
      matricula: "rm88426",
      anexo: {
        nome: nome,
        conteudo: base64,
        extensao: type,
      },
      titulo: file.titulo,
      dataRegistro: file.data,
    };
    return await axios.post("/compras/cadastrar", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};