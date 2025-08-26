import React, { useState } from 'react';

const FindLeap: React.FC = () => {
  const [year, setYear] = useState<string>('');
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(value);
    setError('');
  
    if (!value.trim()) {
      setError('Enter year please');
    } else if (value.length < 4) {
      setError('Enter valid year');
    }
  };

  
  const handleSubmit = () => {
    const numYear = Number(year);

    if (!numYear || year.length < 4) {
      setError('Enter a valid year');
      return;
    }

    if ((numYear % 4 === 0 && numYear % 100 !== 0) || numYear % 400 === 0) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Find Leap Year</h2>

      <input
        type="number"
        onChange={handleChange}
        value={year}
        style={styles.input}
        placeholder="Enter Year"
      />

      <button style={styles.button} onClick={handleSubmit}>
        Check
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {correct !== null && (
        <h3 style={styles.result}>
          {year} is {correct ? '' : 'not '}a leap year
        </h3>
      )}
    </div>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#121212',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '1rem',
    color: '#00ff88',
  },
  input: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #444',
    outline: 'none',
    marginBottom: '1rem',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00ff88',
    color: '#000',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  error: {
    color: '#ff4d4d',
    marginTop: '1rem',
  },
  result: {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    color: '#00ff88',
  },
};

export default FindLeap;
