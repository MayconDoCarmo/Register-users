<?php

include_once '../db.php/config.php';

try {
    if (!isset($_GET['id'])) {
        throw new Exception("ID não informado.");
    }

    $id = intval($_GET['id']);

    $stmt = $conn->prepare("DELETE FROM users WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    echo json_encode(['message' => 'Usuário deletado com sucesso']);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
