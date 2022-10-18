<?php

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\ResponseEvent;

use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

#[AsEventListener(event: 'kernel.response', method: 'onKernelResponse')]
class RequestListener
{
	public function onKernelResponse(ResponseEvent $event)
	{
		if (!$event->isMainRequest()) {
			// don't do anything if it's not the master request
			return;
		}

		$response = $event->getResponse();

		// Set multiple headers simultaneously
		// $response->headers->add([
		// 	'Header-Name1' => 'value',
		// 	'env' => $APP_ENV
		// ]);

		$APP_ENV = getenv('APP_ENV') ?: $_ENV['APP_ENV'];
		$nonce_script = 'a6d2c5203bc7da2cf1eb6e3dfaa89dcb';

		if ($APP_ENV) {
			if ($APP_ENV === "prod") {
				$response->headers->set("Content-Security-Policy", "script-src 'nonce-$nonce_script' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic';object-src 'none';base-uri 'none';");
			} elseif ($APP_ENV === "dev") {
				$response->headers->set("Content-Security-Policy", "default-src 'self'");
			}
		}
	}
}
