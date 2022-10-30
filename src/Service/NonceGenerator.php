<?php

namespace App\Service;

class NonceGenerator
{
    private static string $nonce;

    public function __construct()
    {
        self::$nonce = md5(base64_encode(random_bytes(20)));
    }

    public static function getNonce(): string
    {
        return self::$nonce;
    }

    public static function setNonce(string $nonce): string
    {
        return self::$nonce = $nonce;
    }
}
