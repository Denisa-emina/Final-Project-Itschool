import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

export default function NewsCategory(){
    //Extrag parametrul categoryId din URL
   const { categoryId } = useParams();
    return (
        <Layout>
    <p>Aici sunt toate detaliile despre o anumita categorie: {categoryId}</p>
    </Layout>
);
}