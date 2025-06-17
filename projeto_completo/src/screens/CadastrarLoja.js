import { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { useAuthentication } from '../hooks/useAuthentication';

const RegisterStore = () => {
    const [storeName, setStoreName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState('');
    const { createStore, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")

        const store = {
            storeName,
            address,
            city,
            state
        }

        // Validação básica
        if (!storeName || !address || !city || !state) {
            setError("Todos os campos são obrigatórios!")
            return
        }

        const res = await createStore(store);
    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.register}>
            <h2><center>Cadastrar Nova Loja</center></h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>
                        Nome da Loja:
                    </span>
                    <input
                        type="text"
                        name="storeName"
                        required
                        placeholder="Nome da Loja"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                    />
                </label>
                <label>
                    <span>
                        Endereço:
                    </span>
                    <input
                        type="text"
                        name="address"
                        required
                        placeholder="Endereço completo"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <label>
                    <span>
                        Cidade:
                    </span>
                    <input
                        type="text"
                        name="city"
                        required
                        placeholder="Cidade"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <label>
                    <span>
                        UF:
                    </span>
                    <input
                        type="text"
                        name="state"
                        required
                        placeholder="Estado (UF)"
                        maxLength="2"
                        value={state}
                        onChange={(e) => setState(e.target.value.toUpperCase())}
                    />
                </label>
                <center>{!loading && <button className="btn">Cadastrar Loja</button>}</center>
                <center>{loading && <button className="btn" disabled>Aguarde...</button>}</center>
                <center>{error && <p className="error">{error}</p>}</center>
            </form>
        </div>
    )
}

export default RegisterStore;