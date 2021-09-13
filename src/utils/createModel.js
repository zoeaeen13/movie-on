import { isFunction } from 'lodash'
import React, { useRef, cloneElement } from 'react'
import { render, createPortal } from 'react-dom'

const Portal = ({ children }) => {
	const container = document.body
	return createPortal(children, container)
}

const Modal = ({ children }) => {
	const modalRef = useRef(null)
	const closeModal = (duration = 300, handler) => {
		const removeSelf = () => {
			if (modalRef.current) modalRef.current.remove()
			if (isFunction(handler)) handler()
		}
		setTimeout(removeSelf, duration)
	}

	const modalProps = { closeModal }
	return (
		<Portal>
			<div ref={modalRef}>{cloneElement(children, { ...children.props, ...modalProps })}</div>
		</Portal>
	)
}

const createModel = (children) => {
	const element = <Modal>{children}</Modal>
	const container = document.createElement('div')
	render(element, container)
}

export default createModel
