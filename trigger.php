 <?php
    require('Pusher.php');

    //$key, $secret and $app_id will stay static, 
    //$channel, $event and $data can be static or dynamic
    $key = '';
    $secret = '';
    $app_id = '';
    $channel = 'birds';
    $event = 'squawk';
    $data = $_GET['button'];

    $pusher = new Pusher($key, $secret, $app_id);
    $pusher->trigger($channel, $event, $data);

 ?>

