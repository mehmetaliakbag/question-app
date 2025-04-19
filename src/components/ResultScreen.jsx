import React from 'react';

const ResultScreen = ({ questions, userAnswers, restartQuiz}) => {
    const correctCount = userAnswers.filter((answer, index) => answer === questions[index].answer).length;  // Doğru cevap sayısını tut
    const emptyCount = userAnswers.filter(answer => answer === null).length; // boş sayısını tut
    const wrongCount = questions.length - correctCount - emptyCount; // yanlış sayısını tut

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Test Sonuçları</h2>
          <p>{correctCount} Doğru / {wrongCount} Yanlış / {emptyCount} Boş</p> {/* YENİ EKLENDİ : doğru, yanlış ve boş sayısı */}
          <div style={{ marginTop: '20px' }}>
            {questions.map((question, index) => (
              <div key={index} style={{ marginBottom: '20px', textAlign: 'left' }}>
                <p><strong>Soru {index + 1}: </strong>{question.question}</p>
                {userAnswers[index] !== null && userAnswers[index] !== undefined ? (<p>Verilen Cevap: {userAnswers[index]}</p>) : (<p style={{color: 'gray'}}>Bu soru boş bırakıldı.</p>)}
                <p>
                  {userAnswers[index] === question.answer ? (
                    <span style={{color: 'green'}}>Doğru</span>
                  ) : userAnswers[index] === null ? (
                    <span style={{color: 'gray'}}>Doğru cevap : {question.answer}</span>
                  ) : (
                    <span style={{color: 'red'}}>Yanlış cevapladınız, doğru cevap : {question.answer}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
          <p>{correctCount} Doğru / {wrongCount} Yanlış / {emptyCount} Boş</p> {/* YENİ EKLENDİ : doğru, yanlış ve boş sayısı */}
          <button 
            onClick={restartQuiz} 
            style={{ padding: '10px 20px', marginTop: '20px', fontSize: '16px', backgroundColor: '#A80534', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Testi Tekrar Başlat
          </button>
        </div>
      );
};

export default ResultScreen;