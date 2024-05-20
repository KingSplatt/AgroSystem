use AgroSystem;

DELIMITER //
CREATE PROCEDURE UltimaVenta (OUT IDNuevo int)
BEGIN
	DECLARE IDUltimo int;
    SET @IDNuevo = NULL;
    SELECT  MAX(IDVenta) INTO IDUltimo FROM Venta;
    
    IF IDUltimo IS NULL THEN
		SET IDUltimo = 1;
	ELSE
		SET IDNuevo = IDUltimo + 1;
	END IF;
END//

CALL UltimaVenta(@IDNuevo);
SELECT @IDNuevo AS 'ID a asignar';

DELIMITER //
CREATE PROCEDURE NuevoCliente (OUT IDNuevo int)
BEGIN
	DECLARE IDUltimo int;
    SET @IDNuevo = NULL;
    SELECT  MAX(IDCliente) INTO IDUltimo FROM Cliente;
    
    IF IDUltimo IS NULL THEN
		SET IDUltimo = 1;
	ELSE
		SET IDNuevo = IDUltimo + 1;
	END IF;
END//

CALL NuevoCliente(@IDNuevo);
SELECT @IDNuevo AS 'ID a asignar al cliente';

-- DROP PROCEDURE IF EXISTS NuevoCliente;
-- DROP PROCEDURE IF EXISTS UltimaVenta;

