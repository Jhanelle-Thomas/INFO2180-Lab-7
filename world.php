<?php

$country = htmlspecialchars(strip_tags(trim($_GET['country'])));
$all = htmlspecialchars(strip_tags(trim($_GET['all'])));

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if(isset($_GET['all']) && $all == 'true') {
    
    $stmt = $conn->query("SELECT * FROM countries");
    
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        
    }
    echo '</ul>';
}

else if(isset($_GET['country']) && $country != "") {

    //$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
    
    $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE ?");
    $stmt->execute(array($country));
    
    //$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $results = $stmt->fetchAll();
    
    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        
    }
    echo '</ul>';
}