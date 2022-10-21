<?php

namespace App\Twig;

use App\Service\NonceGenerator as ServiceNonceGenerator;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class NonceGenerator extends AbstractExtension
{
	public function getFunctions()
	{
		return [
			new TwigFunction('getNonce', [$this, 'getNonce']),
		];
	}

	public function getNonce(): string
	{
		return ServiceNonceGenerator::getNonce();
	}
}
