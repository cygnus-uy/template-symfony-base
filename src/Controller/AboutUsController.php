<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{_locale}')]
class AboutUsController extends AbstractController
{
    #[
        Route(
            [
                'es' => '/quienes-somos',
                'en' => '/about-us',
            ],
            name: 'about-us-page',
        ),
    ]
    public function index(): Response
    {
        return $this->render('about_us/index.html.twig', [
            'controller_name' => 'AboutUsController',
        ]);
    }
}
