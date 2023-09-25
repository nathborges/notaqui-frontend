import moment from 'moment';
import axios from '../axios/axios';
import getBase64 from '../utils/getBase64';

let number = 1;

export default {
  async list() {
    const data = await axios.get('/compras/buscar');
    console.log(data);
    return data;
  },
  async getFileInformation(file) {
    const base64 = await getBase64(file);
    const body = { conteudo: `${base64}` };
    const rawData = await axios.post('/ocr/identificar', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (rawData.data.infoPj.cnpj == 'Nao encontrado') {
      throw new Error();
    }

    const data = rawData.data;

    const object = {
      cnpj: data.infoPj.cnpj || '',
      nomeEmpresa: data.infoPj.razaoSocial || '',
      tipoEmpresa: data.infoPj.tipoEmpresa || '',
      value: data.valor || 0.00,
      title: `Nota ${number}`,
      data: moment().format('DD/MM/YYYY'),
    };

    number = number++;
    return object;
  },
  async sendFile(file) {
    const base64 = await getBase64(file.raw);
    const body = {
      infoPj: {
        cnpj: file.cnpj,
        razaoSocial: file.razaoSocial,
        naturezaJuridica: file.naturezaJuridica,
        tipoEmpresa: file.tipoEmpresa,
      },
      valor: file.value,
      matricula: 'rm88426',
      anexo: {
        conteudo: base64,
        extensao: 'jpeg',
      },
      titulo: file.title,
      dataRegistro: file.data
    };

    const rawData = await axios.post('/compras/cadastrar', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

	console.log(rawData);
  },
};
