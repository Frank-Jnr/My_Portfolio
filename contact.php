<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = "From My Portfolio: &nbsp;";
    $subject .= $_POST["subject"];

    $my_email = "chimzifrank@gmail.com";

    $header = "Visitors email: $email \r\n";
    $email_body = "User Name: $name. \n"."Subject: $subject. \n"."$message. \n";

    mail($my_email, $subject, $email_body, $header);
    header("Location: index.html");
?>