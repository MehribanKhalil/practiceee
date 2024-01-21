import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import axios from 'axios'
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import Loader from "../../components/commonComponents/Loader";



const Admin = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [property, setProperty] = useState(null)

  const getProducts= async()=>{
    const res= await axios.get("http://localhost:8000/product")
    setProducts(res.data)
    setIsLoading(false)
  }

  const createProduct= async(data)=>{
    const res= await axios.post("http://localhost:8000/product",data)
    getProducts()
  toast.success(' Added new Product!')
    
  }

  const deleteProduct= async(id)=>{
    const res= await axios.delete(`http://localhost:8000/product/${id}`)
  getProducts()
  toast.success(' Product deleted!')
    
  }


  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <div className=" section page py-16">
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <div>
        <Formik
          initialValues={{ image: "", title: "", price: "" }}
          validationSchema={Yup.object({
            image: Yup.string().required("Required"),
            title: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            price: Yup.number()
              .required("Required")
              .positive("price must be positive value"),
          })}
          onSubmit={(values, { resetForm }) => {
            createProduct(values)

          }}
        >
          <Form className=" form bg-white flex flex-col gap-4 rounded-xl  max-w-[700px] mx-auto p-10">
            <div className=" flex flex-col  gap-2">
              <label htmlFor="image">Image</label>
              <Field
                name="image"
                type="text"
                className=" outline-none px-6 py-2 rounded-full border border-gray-400"
              />
              <ErrorMessage name="image" />
            </div>

            <div className=" flex flex-col  gap-2">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                type="text"
                className=" outline-none px-6 py-2 rounded-full border border-gray-400"
              />
              <ErrorMessage name="title" />
            </div>

            <div className=" flex flex-col  gap-2">
              <label htmlFor="price">Price</label>
              <Field
                name="price"
                type="price"
                className=" outline-none px-6 py-2 rounded-full border border-gray-400"
              />
              <ErrorMessage name="price" />
            </div>

            <div className=" flex  justify-center ">
              <button
                className="border px-6 py-2 rounded-full  text-white uppercase font-bold text-sm border-white"
                type="submit"
              >
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      <div className=" pt-16 flex justify-between">
          <div >
            <div>
               <input type="text"
               className=" outline-none px-6 py-2  rounded-full"
               placeholder="Search by Title" onChange={(e)=>setSearchText(e.target.value)} />
            </div>
          </div>

          <div>
            <div  className=" flex gap-2 text-white">
              <button  className=" border  px-4 py-1 ">A-Z</button>
              <button className=" border  px-4 py-1 ">Z-A</button>
              <button className=" border  px-4 py-1 ">Low to High</button>
              <button className=" border  px-4 py-1 ">Hight to Low</button>
              <button className=" border  px-4 py-1 ">Def</button>

            </div>
          </div>
      </div>

          {
             isLoading ? <Loader/> : <div className="flex flex-col text-white py-16">
             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                 <div className="overflow-hidden">
                   <table className="min-w-full text-left text-sm font-light">
                     <thead className="border-b font-medium dark:border-neutral-500">
                       <tr>
                         <th scope="col" className="px-6 py-4">
                         Image
                         </th>
                         <th scope="col" className="px-6 py-4">
                         Title
                         </th>
                         <th scope="col" className="px-6 py-4">
                         Price
                         </th>
                        
                       </tr>
                     </thead>
                     <tbody>
                       {
                         products && products.filter(item=>item.title.toLowerCase().includes(searchText.toLowerCase())).map(product=>(
                           <tr key={product._id} className="border-b dark:border-neutral-500">
                         <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <div  className=" max-w-[100px]">
                           <img src={product.image} alt="" />

                          </div>
                         </td>
                         <td className="whitespace-nowrap px-6 py-4">{product.title}</td>
                         <td className="whitespace-nowrap px-6 py-4">${product.price}</td>
                         <td className="whitespace-nowrap px-6 py-4">
                           <button onClick={()=>deleteProduct(product._id)}>
                           <FaRegTrashAlt />
   
                           </button>
                         </td>
                       </tr>
                         ))
                       }
                      
                     </tbody>
                   </table>
                 </div>
               </div>
             </div>
           </div>
          }
      
    </div>
  );
};

export default Admin;
