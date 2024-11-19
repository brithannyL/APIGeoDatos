import { conmysql } from '../db.js';

export const getDatos = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM tb_datos');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar datos" });
    }
};

export const getDatoById = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM tb_datos WHERE dato_id = ?', [req.params.id]);
        if (result.length <= 0) return res.status(404).json({ dato_id: 0, message: "Dato no encontrado" });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

export const postDato = async (req, res) => {
    try {
        const { titulo, medidas, latitud, longitud } = req.body;
        const [rows] = await conmysql.query(
            'INSERT INTO tb_datos (titulo, medidas, latitud, longitud) VALUES (?, ?, ?, ?)',
            [titulo, medidas, latitud, longitud]
        );
        res.json({ id: rows.insertId });
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

export const putDato = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, medidas, latitud, longitud } = req.body;
        const [result] = await conmysql.query(
            'UPDATE tb_datos SET titulo = ?, medidas = ?, latitud = ?, longitud = ? WHERE dato_id = ?',
            [titulo, medidas, latitud, longitud, id]
        );
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Dato no encontrado" });
        const [rows] = await conmysql.query('SELECT * FROM tb_datos WHERE dato_id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

export const patchDato = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, medidas, latitud, longitud } = req.body;
        const [result] = await conmysql.query(
            'UPDATE tb_datos SET titulo = IFNULL(?, titulo), medidas = IFNULL(?, medidas), latitud = IFNULL(?, latitud), longitud = IFNULL(?, longitud) WHERE dato_id = ?',
            [titulo, medidas, latitud, longitud, id]
        );
        if (result.affectedRows <= 0) return res.status(404).json({ message: "Dato no encontrado" });
        const [rows] = await conmysql.query('SELECT * FROM tb_datos WHERE dato_id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

export const deleteDato = async (req, res) => {
    try {
        const [rows] = await conmysql.query('DELETE FROM tb_datos WHERE dato_id = ?', [req.params.id]);
        if (rows.affectedRows <= 0) return res.status(404).json({ id: 0, message: "No pudo eliminar el dato" });
        res.sendStatus(202);
    } catch (error) {
        return res.status(500).json({ message: "Error del lado del servidor" });
    }
};
