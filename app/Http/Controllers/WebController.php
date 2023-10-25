<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function index(){
        return view('home');
    }
    public function viewNosotros(){
        return view('nosotros');
    }
    public function viewCategorias(){
        return view('categorias');
    }
    public function viewContacto(){
        return view('contacto');
    }
}
