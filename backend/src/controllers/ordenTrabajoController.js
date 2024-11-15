import pool from '../db.js';


export const getOrdenesTrabajo = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM orden_trabajo');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las órdenes de trabajo' });
  }
};


export const getOrdenTrabajoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM orden_trabajo WHERE idorden_trabajo = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Orden de trabajo no encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la orden de trabajo' });
  }
};


export const createOrdenTrabajo = async (req, res) => {
  const { operario, sector, edificio, ubicacion, piso, id_activo_tarea } = req.body;

  console.log('Datos recibidos en la solicitud:', req.body);

  if (!operario || !edificio || !piso || !sector || !ubicacion || !id_activo_tarea) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO orden_trabajo 
        (id_sector, id_edificio, id_ubicacion_activo, id_piso, id_activo_tarea, id_usuario) 
        VALUES (?, ?, ?, ?, ?, ?)`,
      [sector, edificio, ubicacion, piso, id_activo_tarea, operario]
    );

    res.status(201).json({ message: 'Orden de trabajo creada con éxito', id: result.insertId });
  } catch (err) {
    console.error('Error al crear la orden de trabajo:', err);
    res.status(500).json({ error: 'Error al crear la orden de trabajo' });
  }
};


export const updateOrdenTrabajo = async (req, res) => {
  const { id } = req.params;
  const {
    id_operario,
    id_sector,
    id_edificio,
    id_activo_tarea,
    id_ubicacion_activo,
    id_piso,
    id_administrativo,
    id_numero_tipo,
  } = req.body;

  try {
    const [result] = await pool.query(
      `UPDATE orden_trabajo SET 
        id_operario = ?, id_sector = ?, id_edificio = ?, 
        id_activo_tarea = ?, id_ubicacion_activo = ?, 
        id_piso = ?, id_administrativo = ?, id_numero_tipo = ?
      WHERE idorden_trabajo = ?`,
      [
        id_operario, id_sector, id_edificio, id_activo_tarea, 
        id_ubicacion_activo, id_piso, id_administrativo, 
        id_numero_tipo, id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Orden de trabajo no encontrada' });
    }

    res.json({ message: 'Orden de trabajo actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la orden de trabajo' });
  }
};


export const deleteOrdenTrabajo = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM orden_trabajo WHERE idorden_trabajo = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Orden de trabajo no encontrada' });
    }

    res.json({ message: 'Orden de trabajo eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la orden de trabajo' });
  }
};



export const getOrdenesTrabajoDetalladas = async (req, res) => {
  
  try {
    let query = `
      SELECT 
        ot.idorden_trabajo AS orden_trabajo_id, 
        at.idactivo_tarea AS activo_tarea_id,
        a.tipo AS activo_tipo,
        a.tag_diminutivo AS activo_tag,
        t.tarea AS tarea_descripcion,
        e.nombre AS edificio_nombre,
        p.piso AS piso_nombre,
       u.nombre AS usuario_nombre,
        s.sector AS sector_nombre,
        ua.ubicacion AS ubicacion_nombre
       
      FROM 
        orden_trabajo ot
      JOIN 
        activo_tarea at ON ot.id_activo_tarea = at.idactivo_tarea
      JOIN 
        activo a ON at.id_activo = a.id_activo
      JOIN 
        tarea t ON at.id_tarea = t.id_tarea
      JOIN 
        edificio e ON ot.id_edificio = e.id_edificio
      JOIN 
        piso p ON ot.id_piso = p.id_piso
        JOIN
   usuario u ON ot.id_usuario = u.id_usuario
      JOIN 
        sector s ON ot.id_sector = s.id_sector
      JOIN 
        ubicacion_activo ua ON ot.id_ubicacion_activo = ua.idubicacion_activo
  `;

 
      const [rows] = await pool.query(query);
      res.json(rows);

    
  } catch (error) {
    console.error('Error al obtener las órdenes de trabajo:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes de trabajo detalladas' });
  }
};


export const getOrdenesTrabajoPorOperario = async (req, res) => {
  try {
    const query = `
      SELECT 
        ot.idorden_trabajo AS orden_trabajo_id, 
        ot.fecha_creacion,
        ot.estado,
        e.nombre AS edificio_nombre,
        p.piso AS piso_nombre,
        s.sector AS sector_nombre,
        ua.ubicacion AS ubicacion_nombre,
        a.tipo AS activo_tipo,
        a.tag_diminutivo AS activo_tag,
        t.tarea AS tarea_descripcion,
        u.nombre AS usuario_nombre
      FROM 
        orden_trabajo ot
      JOIN 
        activo_tarea at ON ot.id_activo_tarea = at.idactivo_tarea
      JOIN 
        activo a ON at.id_activo = a.id_activo
      JOIN 
        tarea t ON at.id_tarea = t.id_tarea
      JOIN 
        edificio e ON ot.id_edificio = e.id_edificio
      JOIN 
        piso p ON ot.id_piso = p.id_piso
      JOIN 
        sector s ON ot.id_sector = s.id_sector
      JOIN 
        ubicacion_activo ua ON ot.id_ubicacion_activo = ua.idubicacion_activo
      JOIN 
        usuario u ON ot.id_usuario = u.id_usuario
      WHERE 
        u.area = 'operario';
    `;
    const [rows] = await pool.query(query);
    res.json(rows);
  
  } catch (error) {
    console.error('Error al obtener las órdenes de trabajo para operarios:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes de trabajo para operarios' });
  }
};

export const getOrdenesTrabajoFiltradas = async (req, res) => {
  const { activo, operario } = req.query;
  console.log('Parámetros recibidos:', { activo, operario });
  
  let query = `  
      SELECT 
        ot.idorden_trabajo AS orden_trabajo_id, 
        e.nombre AS edificio_nombre,
        p.piso AS piso_nombre,
        s.sector AS sector_nombre,
        ua.ubicacion AS ubicacion_nombre,
        a.tipo AS activo_tipo,
        a.tag_diminutivo AS activo_tag,
        t.tarea AS tarea_descripcion,
        u.nombre AS usuario_nombre
      FROM 
        orden_trabajo ot
      JOIN 
        activo_tarea at ON ot.id_activo_tarea = at.idactivo_tarea
      JOIN 
        activo a ON at.id_activo = a.id_activo
      JOIN 
        tarea t ON at.id_tarea = t.id_tarea
      JOIN 
        edificio e ON ot.id_edificio = e.id_edificio
      JOIN 
        piso p ON ot.id_piso = p.id_piso
      JOIN 
        sector s ON ot.id_sector = s.id_sector
      JOIN 
        ubicacion_activo ua ON ot.id_ubicacion_activo = ua.idubicacion_activo
      JOIN 
        usuario u ON ot.id_usuario = u.id_usuario 
        WHERE
         1=1
        `;
  const params = [];

  if (activo) {
    query += `AND ot.id_activo_tarea = ?`;
    params.push(activo);
  }
  if (operario) {
    query += `AND ot.id_usuario = ?`;
    params.push(operario);
  }

  try {
    const [rows] = await pool.query(query, params);
  
    if (rows.length === 0) {
  
      return res.status(404).json({ error: 'No se encontraron órdenes de trabajo con los filtros especificados' });
    }

    res.json(rows);
  } catch (error) {
    console.error('Error al obtener las órdenes de trabajo filtradas:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes de trabajo filtradas' });
   
  }
};


