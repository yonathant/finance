<?php
 $fname = $_POST['fname'];
 $lname = $_POST['lname'];
 $visitor_phone = $_POST['phone'];
 $visitor_email = $_POST['email'];
 $idnumber = $_POST['idNum'];

 $email_from = 'testEmail@jekatso.com';

 $email_subject = "בקשת בדיקה חדשה";

 $email_body = "שם פרטי: $fname.\n".
  "שם משפחה: $lname.\n".
  "מס' טלפון: $visitor_phone.\n".
  "דואר אלקטרוני: $visitor_email.\n".
  "מס' ת.ז.: $idnumber.\n";
 
  $to = "trala99@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: index.html");

?>