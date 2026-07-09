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
    }
  };

  // Inicializa os links globais como sendo os padrão
  window.checkoutLinks = window.defaultLinks;
})();
