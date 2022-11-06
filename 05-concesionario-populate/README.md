# Concesionario React

Debemos crear una página que sirva de frontal para nuestro backend en MongoDB, recordamos las características:

Debemos tener:
* una cabecera,
* un formulario que nos sirva para filtrar y buscar productos,
* una tabla donde mostraremos los datos de los productos y 
* un pie de página.

Podríamos entender cada uno de estos como un componente (opcional) o añadir los que creamos oportunos.

Debemos generar renderizados condicionales para realizar control de errores tanto en el formulario (a la hora de validarlo), como para mostrar mensajes auxiliares en la tabla de los datos cuando no existan datos.

También deberemos mostrar animaciones (spinners) o mensajes auxiliares mientras se procesan las consultas.

​Recordamos que el formulario debe añadir un desplegable con las marcas de los concesionarios.

Al entrar a la página debemos volcar todos los productos en la tabla, y se irá actualizando a medida que filtremos con el formulario.

Debemos poder ordenar por precio de manera ascendiente y descendiente

Crear un componente para paginación que nos permita navegar entre los productos, debe mostrar en la página en la que estás, el total de productos y páginas.

Al seleccionar un producto, mostraremos los datos relativos a este y su fabricante

Nota: Usar con 12-backend-paginate
