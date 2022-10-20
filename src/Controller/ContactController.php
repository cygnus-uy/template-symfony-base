<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{_locale}')]
class ContactController extends AbstractController
{
    #[
        Route(
            [
                'es' => '/contacto',
                'en' => '/contact',
            ],
            name: 'contact-page',
        ),
    ]
    public function index(): Response
    {
        $contactForm = $this->createForm(ContactType::class);

        return $this->render('contact/index.html.twig', [
            'contactForm' => $contactForm,
        ]);
    }
}
