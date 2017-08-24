<?php

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

if ($_POST['origin']=='form1') {
	$email_address= 'info@khconsultoria.com';
	$email_address_name= 'Info kh asesores';
	$email_subject= 'Nuevo mensaje de contacto - '.$_POST['tipo'].' - '.date('Y-m-d');
	$mensaje= "Asunto: ".$_POST['subject']."\n\nNombre: ".$_POST['name']."\n\nEmail: ".$_POST['email']."\n\nCelular: ".$_POST['phone']."\n\nMensaje: ".$_POST['message']."\n\n";
	$mail->AddReplyTo($_POST['email'], 'Responder a');
}

if ($_POST['origin']=='form2') {
	$email_address= 'asistente@khconsultoria.com';
	$email_address_name= 'Asistente kh asesores';
	$email_subject= 'Nueva hoja de vida - '. date('Y-m-d');
	$mensaje= "Comentarios: ".$_POST['message']."\n\n";

	if (isset($_FILES['hv']) && $_FILES['hv']['error'] == UPLOAD_ERR_OK) {
	    $mail->AddAttachment($_FILES['hv']['tmp_name'], $_FILES['hv']['name']);
	}
}

$mail->setFrom('noreply@khconsultoria.com', 'Website');
$mail->addAddress('osdario17@gmail.com'/*$email_address*/, $email_address_name);
$mail->Subject  = $email_subject;
$mail->Body     = $mensaje;
$mail->IsSMTP();
$mail->Host = "smtp.google.com";
$mail->SMTPAuth = true;
$mail->Username = 'mailerkh@gmail.com';
$mail->Password = 'kh4s3s0r3s';
$mail->SMTPSecure = 'tls';
$mail->Host = "smtp.gmail.com";
$mail->Mailer = "smtp";
$mail->Port = 587;


if(!$mail->send()) {
	return json_encode(['error'=> true]);
	/*echo 'Message was not sent.';
	echo 'Mailer error: ' . $mail->ErrorInfo;*/
} else {
	return json_encode(['error'=> false]);
  	/*echo 'Message has been sent.';*/
}

?>