import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';



const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default function Projects() {
    return (
      <div>
        
        <main className="bg-slate-100  ">
          <section className="min-h-screen bg-slate-100">
        <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</a>

                    <a href="/projects" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                    <a href="/gallery" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>

                    <a href="/aboutme" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About Me</a>

                    <a href="/contact" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Contact</a>


                </div>
            </nav>

            <div className="flex justify-center items-center h-screen">
                  ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
            </div>
        </section>
        </main>
      </div>
    );
  }