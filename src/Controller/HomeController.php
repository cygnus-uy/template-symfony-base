<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{_locale}')]
class HomeController extends AbstractController
{
    public function __construct(private RequestStack $requestStack)
    {
    }

    #[
        Route(
            [
                'es' => '/inicio',
                'en' => '/home',
            ],
            name: 'home-page',
        ),
    ]
    public function index(): Response
    {
        $contactForm = $this->createForm(ContactType::class);

        return $this->render('home/index.html.twig', [
            'contactForm' => $contactForm->createView(),
        ]);
    }
}
