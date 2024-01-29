# FONT AWESOME - GESTION DE ICONOS

Instalacion de iconos en React:

[Guia oficial](https://fontawesome.com/v5/docs/web/use-with/react)

```Node
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

Como utilizar los iconos en React:

[Referencia](https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-individual-use)

```React
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

--------------

				<div className='rating'>
					<div>5.0</div>
					<div>
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
					</div>
					<div>(105 Reviews)</div>
				</div>
			</div>
```
