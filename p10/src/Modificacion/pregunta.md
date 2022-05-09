
Desarrolle un programa que reciba desde la línea de comandos un fichero con una lista de números que debe ser observado. Para ello, lea la documentación y utilice la función watch del módulo fs. 

¿Qué argumentos recibe el manejador de la función watch? Cada vez que se modifique el fichero, añadiendo o eliminando números del mismo, lleve a cabo la suma de todos los números existentes en el fichero. Para llevar a cabo la suma, escriba un programa en TypeScript que consista en una función que abre el fichero con la lista de números, los sume, y escriba en consola el resultado. Deberá invocar dicho programa desde el manejador de la función watch expandiendo un subproceso.

¿Qué sucede si el fichero pasado desde la línea de comandos al programa anterior no existe? Modifique el programa para gestionar esta posible situación.

¿Qué sucede si el fichero observado se elimina mientras está siendo observado? Modifique el programa para gestionar esta posible situación.

¿Cómo haría para indicar la operación a llevar a cabo sobre la lista de números desde la línea de comandos? Modifique su programa para que reciba el comando a expandir desde la línea de comandos. Debería poder ejecutarlo de la siguiente manera: 'node operaLista.js numberList.txt +' para llevar a cabo la suma; o 'node operaLista.js numberList.txt *', para llevar a cabo el producto.