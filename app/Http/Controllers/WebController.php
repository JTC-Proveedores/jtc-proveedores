<?php

namespace App\Http\Controllers;

use App\Mail\MessageReceived;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

    public function ajaxSendMail(Request $request){

        $message = [
            'names'     => $request->input('names'),
            'email'     => $request->input('email'),
            'message'   => $request->input('message'),
        ];

        Mail::to('cotizaciones@jtcproveedores.com')->send(new MessageReceived($message));

        return 'mensaje enviado';
    }
}
