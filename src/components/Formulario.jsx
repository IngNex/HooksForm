import React, { Fragment} from 'react';
import { useCounter } from '../hooks/useCounter';

const FormHooks = () => {
    const { valores, handleInputChange } = useCounter()
    
    const cargarData = (success) => {
        const {nombre, email, password}= valores;
        success.preventDefault();
        console.log(
            `nombre: ${nombre}\nemail: ${email}\npassword: ${password}`);
    }

    //console.log(valores);
    
    return (
        <Fragment>
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Formulario Hook</h2>
                        <form onSubmit={cargarData}>
                            <div className='row'>
                                <div className='col-md-4 mt-2'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>Nombre</label>
                                        <input type='text' className='form-control' 
                                        placeholder='Ingrese Nombre'
                                        id='nombre' name='nombre' onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-2'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <input type='email' className='form-control' 
                                        placeholder='Ingrese Email'
                                        id='email' name='email' onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-2'>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password</label>
                                        <input type='password' className='form-control' 
                                        placeholder='Ingrese Password'
                                        id='password' name='password' onChange={handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <input type='submit' className='btn btn-danger'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default FormHooks;