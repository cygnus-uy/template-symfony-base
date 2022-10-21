<?php

namespace App\Service;

class NonceGenerator
{
	private static string $nonce;

	public function __construct()
	{
		self::$nonce = base64_encode(random_bytes(20));
	}

	public static function getNonce(): string
	{
		if (!self::$nonce) {
			self::$nonce = base64_encode(random_bytes(20));
		}

		return self::$nonce;
	}
}
