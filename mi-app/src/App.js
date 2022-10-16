import './App.css';
import Testimonio from '../src/componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Biografia de Matematicos</h1>
      <Testimonio
        nombre='Leonardo Fibonacci'
        cargo='Matemático '
        anios='(1170?- 1250? Pisa, actual Italia)'
        imagen='Fibonacci'
        biografia='La secuencia resultante es 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... (Fibonacci omitió el primer término en el Liber abaci). Esta secuencia, en la que cada número es la suma de los dos números precedentes, se ha probado extremadamente fructífera y aparece en muchas áreas diferentes de las matemáticas y la ciencia.

        Otro de los libros de Fibonacci es el Practica geometriae escrito en 1220 que está dedicado a Dominicus Hispanus a quien ya mencionamos anteriormente. Contiene una amplia colección de problemas de geometría organizados en ocho capítulos con teoremas basados en los Elementos y en Sobre las Divisionesde Euclides. Además de los teoremas geométricos con pruebas precisas, el libro incluye información práctica para topógrafos, incluyendo un capítulo sobre cómo calcular la altura de objetos altos usando triángulos similares.'/>
        <Testimonio
        nombre='Carl Friedrich Gauss'
        cargo='Matemático '
        anios='(1777 Brunswick, 1855 Göttingen, Hannover ahora Alemania)'
        imagen='Gauss'
        biografia='En 1807, fue nombrado director del observatorio de Göttingen con la única obligación, si fuera necesario, de dar cursos de matemáticas a los estudiantes de la universidad. La enseñanza no fue una tarea que agradara a Gauss, solamente con buenos matemáticos se sentía cómodo impartiendo sus lecciones. Desde 1821 hasta 1848 Gauss trabajó en Geodesia. Entre 1830 y 1840 se dedicó a la física matemática, concretamente electromagnetismo, magnetismo terrestre la teoría de la atracción según la ley de Newton. Los últimos años de su vida, entre 1841 y 1855, los dedicó al "análisis situs" y a la geometría asociada a funciones de variable compleja.'/>
        <Testimonio
        nombre='Leonhard Euler'
        cargo='Matemático '
        anios='Matemático (1707 Basilea, Suiza, 1783 San Petersburgo, Rusia)'
        imagen='Euler'
        biografia='Euler era como Newton y muchos otros, un hombre capacitado, que había estudiado anatomía, química y botánica. La apacibilidad de ánimo, la moderación y la sencillez de las costumbres fueron sus características. Su hogar era su alegría, y le gustaban los niños. Pese a su desgracia, fue animoso y alegre, poseyó abundante energía; como ha atestiguado su discípulo M. Fuss, "su piedad era racional y sincera; su devoción, ferviente".

        El trabajo de Euler en matematicas fue amplísimo. Ha sido el más prolífico escritor de matemáticas de todos los tiempos. Ha hecho importantes contribuciones en geometría analítica y trigonometria, donde fue el primero en considerar al seno, coseno etc. como funciones en vez de como cuerdas siguiendo a Ptolemeo.'/>
      </div>
    </div>
  );
}

export default App;
