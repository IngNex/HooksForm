import { useState } from "react";

export const useCounter = ( iniciarForm = {} ) => {

  const [valores, setFormDato] = useState(iniciarForm)

  const handleInputChange = (evento) => {
    setFormDato({
      ...valores,
      [evento.target.name]: evento.target.value
    })
  }

  return { valores, handleInputChange}
}
