import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }
  const addToDo = () => {
    let todos = localStorage.getItem('todos');
    if (todos) {
      let todosArray = JSON.parse(todos);
      //Arama yapıyoruz, girilen title daha önceden var mı yok mu?
      if (todosArray.filter(item => { return todo.title == item.title }).length > 0) {
        alert("Bu başlık ile daha önce kayıt yapılmış, yeniden deneyin.");
      }
      else {
        todosArray.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosArray));
        setTodo({ title: "", desc: "" });
        alert("Kayıt başarıyla eklendi");
      }
    }
    else {
      localStorage.setItem("todos", JSON.stringify([todo]));
      setTodo({ title: "", desc: "" });
      alert("Kayıt başarıyla eklendi");
    }
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap items-center">
          <div className="w-full bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Görev Ekle</h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm text-gray-600">Başlık</label>
              <input onChange={onChange} value={todo.title} type="text" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Açıklama</label>
              <input onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={addToDo} className="text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">Görevi Ekle</button>
          </div>
        </div>
      </section>
    </>
  )
}




// let isThere = false;
//       for (let i = 0; i < todosArray.length; i++) {
//         if (todosArray[i].title == todo.title) {
//           isThere = true;
//         }
//       }
//       if (!isThere) {
//         todosArray.push(todo);
//         localStorage.setItem("todos", JSON.stringify(todosArray));
//         alert("Kayıt eklendi");
//       } else {
//         alert("Bu başlık daha önceden kayıtlı");
//       }