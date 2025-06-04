<?php

include_once '../db.php/config.php';


try {
    $id = $_GET['id'] ?? null;
    $data = json_decode(file_get_contents("php://input"));

    error_log("🔍 ID recebido via GET: " . var_export($id, true));
    error_log("🔍 Dados recebidos via input: " . file_get_contents("php://input")); // texto cru
    error_log("🔍 Objeto decodificado: " . json_encode($data));

    if (!$id || !$data) {
        throw new Exception("Usuário não informado");
    }

    error_log("ID: " . $id);
    error_log("NAME: " . $data->name);
    error_log("EMAIL: " . $data->email);

    $stmt = $conn->prepare("UPDATE users SET 
        name = :name,
        email = :email,
        role = :role,
        sector = :sector,
        healthPlan = :healthPlan,
        dentalPlan = :dentalPlan
        WHERE id = :id");

    $stmt->bindParam(':name', $data->name);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':role', $data->role);
    $stmt->bindParam(':sector', $data->sector);
    $stmt->bindParam(':healthPlan', $data->healthPlan, PDO::PARAM_BOOL);
    $stmt->bindParam(':dentalPlan', $data->dentalPlan, PDO::PARAM_BOOL);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    $stmt->execute();


    echo json_encode(['message' => 'Usuário atualizado com sucesso']);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
