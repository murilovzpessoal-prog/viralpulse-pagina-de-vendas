// js/affiliates.js
(function() {
  // Links de checkout padrão (seus links, sem afiliado)
  window.defaultLinks = {
    mensal: "https://pay.cakto.com.br/h6zxvfe",
    vitalicio: "https://pay.cakto.com.br/3a6ks56",
    mensal_desconto: "https://pay.cakto.com.br/382chff_794824",
    vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj"
  };

  // Dicionário de cupons de afiliados
  // A chave (ex: "hexa") é o cupom que o cliente vai digitar.
  window.affiliateCoupons = {
    "hexa": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=mmFdhiqc",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=mmFdhiqc",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=mmFdhiqc",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=mmFdhiqc"
    },
    "x": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=mmFdhiqc",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=mmFdhiqc",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=mmFdhiqc",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=mmFdhiqc"
    },
    "fifa": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=YL47Vqpv",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=YL47Vqpv",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=YL47Vqpv",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=YL47Vqpv"
    },
    "camisa10": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=eLo3BmNc",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=eLo3BmNc",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=eLo3BmNc",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=eLo3BmNc"
    },
    "maya": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=ZRAsQRKn",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=ZRAsQRKn",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=ZRAsQRKn",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=ZRAsQRKn"
    },
    "gol30": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=twZub4Mh",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=twZub4Mh",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=twZub4Mh",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=twZub4Mh"
    },
    "fifacup": {
      mensal: "https://pay.cakto.com.br/h6zxvfe?affiliate=nfvoEvTW",
      vitalicio: "https://pay.cakto.com.br/3a6ks56?affiliate=nfvoEvTW",
      mensal_desconto: "https://pay.cakto.com.br/382chff_794824?affiliate=nfvoEvTW",
      vitalicio_desconto: "https://pay.cakto.com.br/mkxq6qj?affiliate=nfvoEvTW"
    }
  };

  // Inicializa os links globais como sendo os padrão
  window.checkoutLinks = window.defaultLinks;
})();
