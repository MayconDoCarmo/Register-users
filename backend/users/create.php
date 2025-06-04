<?php 

include_once '../db.php/config.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

try{
  $data = json_decode(file_get_contents("php://input"));

  $stmt = $conn-> prepare("INSERT INTO users (name, email, role, sector, healthPlan, dentalPlan) VALUES (:name, :email, :role, :sector, :healthPlan, :dentalPlan)");

  $stmt->bindParam(':name', $data->name);
  $stmt->bindParam(':email', $data->email);
  $stmt->bindParam(':role', $data->role);
  $stmt->bindParam(':sector', $data->sector);
  $stmt->bindParam(':healthPlan', $data->healthPlan, PDO::PARAM_BOOL);
  $stmt->bindParam(':dentalPlan', $data->dentalPlan, PDO::PARAM_BOOL);


  $stmt->execute();

  echo json_encode(['message' => 'Usuário atualizado com sucesso']);

} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}



?>