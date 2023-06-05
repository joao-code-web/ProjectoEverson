<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];

  $destinatario = "joao.gomes264@aluno.ce.gov.br";
  $assunto = "Novo formulário enviado";
  $corpo = "Nome: $nome\nEmail: $email\nMensagem: $mensagem";

  if (mail($destinatario, $assunto, $corpo)) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar o email.";
  }
}
?>
