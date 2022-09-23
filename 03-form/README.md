# EJERCICIO REACT-HOOK FORM

Debemos desarrollar un formulario a través del hook react-hook-form con las siguientes características:Recordar instalar e importar el HOOK, en este caso usaremos useForm:

npm install react-hook-form

import { useForm } from 'react-hook-form';

Las funcionalidades que debemos extraer del hook son las siguientes:const { register, handleSubmit, formState: { errors }, watch } = useForm();Definiremos un formulario donde pidamos los siguientes campos:

    Nombre: Debe ser obligatorio y con una longitud máxima de 16
    Edad: Debemos asignarle a través del register una función de validación que comprobará si la edad está entre 18 y 65
    Correo electrónico: Debemos controlar que el formato es válido a través de una expresión regular usando register
    ¿Código promocional?: Será un check donde al pulsarlo sacaremos otro input de texto para poder meter el código

Debemos tener una función que será ejecutada al lanzar el submit donde imprimirá por consola todos los campos del formulario.Daremos de alta también un párrafo donde se irá configurando un nombre de usuario a la vez que se escribe en el input del nombre (a través de un watch).Todas las validaciones deberán imprimir un párrafo señalando el error de validación.