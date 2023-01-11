const somar = (req, res) => {
  const { num1, num2 } = req.query;
 
  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    res.send(`${Number(num1) + Number(num2)}`);
  }
  return res.send("Não é um numero!");
};

const subtrair = (req, res) => {
  const { num1, num2 } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    res.send(`${Number(num1) - Number(num2)}`);
  }

  return res.send("Não é um número!");
};

const multiplicar = (req, res) => {
  const { num1, num2 } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    res.send(`${Number(num1) * Number(num2)}`);
  }
  return res.send("Não é um número!");
};

const dividir = (req, res) => {
  const { num1, num2 } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    res.send(`${Number(num1) / Number(num2)}`);
  }
  return res.send("Não é um número!");
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
