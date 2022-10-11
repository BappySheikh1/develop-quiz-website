export const getQuizData=async ()=>{
    const quizData=await fetch('https://openapi.programming-hero.com/api/quiz')
    const data =await quizData.json()
    
    return data;
}