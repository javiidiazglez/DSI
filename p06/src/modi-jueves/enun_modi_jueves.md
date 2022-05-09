   
    Diseñe una interfaz genérica 'Arithmeticable', que defina los siguientes métodos con los que debería contar una clase que implemente dicha interfaz genérica: add, substract, multiply, divide.

    Diseñe una clase genérica 'ArithmeticableCollection' cuyo parámetro de tipo genérico 'T' se encuentre restringido a la forma definida por la interfaz 'Arithmeticable'. Dicha clase genérica deberá contar, al menos, con los métodos 'addArithmeticable' (añadir un elemento a la colección), 'getArithmeticable' (obtener un elemento de la colección) y 'getNumberOfArithmeticables' (obtener el tamaño de la colección), además de con un array de elementos cuyo tipo sea T.

    Diseñe una clase 'Complex' y otra clase 'Rational' que implementen la interfaz 'Arithmeticable'.

    Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de las clases 'Complex' y 'Rational' y demuestre su correcto funcionamiento.

    Trate de respetar los principios SOLID en su diseño de clases e interfaces.