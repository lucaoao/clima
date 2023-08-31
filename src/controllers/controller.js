const axios = require("../middlewares/connection");

const compare = async (req, res) => {
  try {
    const responseSorocaba = await axios.get(
      "/forecast?lat=-23.506269&lon=-47.455631&units=metric"
    );
    const sorocabaTemp = responseSorocaba.data.list[0].main.temp;

    const responseRoraima = await axios.get(
      "/forecast?lat=2.819230&lon=-60.670658&units=metric"
    );
    const roraimaTemp = responseRoraima.data.list[0].main.temp;

    const diferenca = (Number(roraimaTemp) - Number(sorocabaTemp)).toFixed(2);
    return res.render("index", {
      sorocabaTemp: sorocabaTemp,
      roraimaTemp: roraimaTemp,
      diferenca: diferenca,
    });
  } catch (error) {
    return res.status(500).json({ memsagem: error.message });
  }
};

module.exports = { compare };
