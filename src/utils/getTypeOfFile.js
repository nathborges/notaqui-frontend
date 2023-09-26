const getTypeOfFile = (file) => {
    return file.type.split('/')[1] || 'png';
  };
  
  export default getTypeOfFile;
  