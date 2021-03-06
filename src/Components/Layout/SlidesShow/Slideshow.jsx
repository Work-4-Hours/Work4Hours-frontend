import React, {useRef, useEffect, useCallback} from 'react';
import {ReactComponent as FlechaIzquierda} from 'Assets/Icons/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from 'Assets/Icons/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';

const Slideshow = ({
		children,
		controles = false,
		autoplay = false,
		velocidad="700",
		intervalo="5000"
	}) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		if(slideshow.current.children?.length > 0){

			const primerElemento = slideshow.current.children[0];

			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);
	
	const anterior = () => {
		console.log('Anterior');
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);
	
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});
	
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>
				{children}
			</ContenedorSlideshow>
			{controles && <Controles>
				<Boton onClick={anterior}>
					<FlechaIzquierda />
				</Boton>
				<Boton derecho onClick={siguiente}>
					<FlechaDerecha />
				</Boton>
			</Controles>}
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	height: 100%;
`;

const Slide = styled.div`
	min-width: 100%;
	height: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 1;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;

const TextoSlide = styled.div`
	background: ${props => props.colorFondo ? props.colorFondo : ' linear-gradient(90deg,#292929 4%,rgba(41,41,41,.79) 24%,rgba(41,41,41,.479) 42%,rgba(41,41,41,0) 57%)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	width: 100%;
	height: 100%;
	padding: 20px;
	position: absolute;
	padding: 40px;
	bottom: 0;
	font-family: var(--font-1);

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	/* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;
 
export {Slideshow, Slide, TextoSlide};