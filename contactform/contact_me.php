<?php

require_once('PHPMailer/class.phpmailer.php');

if (empty($_POST['origin'])) {
	return 'sin origen';
}

if ($_POST['origin']=='form1') {
	$email_address= 'info@khconsultoria.com';
	$email_subjec= 'Nuevo mensaje de contacto - "'.$_POST['tipo'].'" - '.date('Y-m-d');
	$mensaje= "Asunto: $_POST['subject']\n\nNombre: $_POST['name']\n\nEmail: $_POST['email']\n\nAsunto: $_POST['phone']\n\nMensaje: $_POST['message']\n\n":
}

if ($_POST['origin']=='form2') {
	$email_address= 'asistente@khconsultoria.com';
	$email_subjec= 'Nueva hoja de vida website - '. date('Y-m-d');
	$mensaje= "Comentarios: $_POST['message']\n\n":
}

$email = new PHPMailer();

$email->From      = 'noreply@khconsultoria.com';
$email->FromName  = 'Website';
$email->Subject   = $email_subject;
$email->Body      = $email_body;
$email->AddAddress( 'osdario17@gmail.com' );

//$file_to_attach = 'PATH_OF_YOUR_FILE_HERE';

if (isset($_FILES['uploaded_file']) && $_FILES['uploaded_file']['error'] == UPLOAD_ERR_OK) {
    $email->AddAttachment($_FILES['uploaded_file']['tmp_hv'],
                         $_FILES['uploaded_file']['hv']);
}

return $email->Send();        
?>