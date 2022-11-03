<?php

namespace App\Controller;

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
        $session = $this->requestStack->getSession();

        $session->set('attribute-name', 'attribute-value');

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'attributeName' => $session->get('attribute-name')
        ]);
    }
}
