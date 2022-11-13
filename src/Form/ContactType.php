<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(
        FormBuilderInterface $builder,
        array $options,
    ): void {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'attr' => ['placeholder' => 'Nombre'],
            ])
            ->add('email', EmailType::class, [
                'required' => true,
                'attr' => ['placeholder' => 'Correo electrónico'],
            ])
            ->add('phone', TelType::class, [
                'required' => true,
                'attr' => ['placeholder' => 'Teléfono'],
            ])
            ->add('message', TextareaType::class, [
                'required' => true,
                'attr' => ['placeholder' => 'Mensaje'],
            ])
            ->add('send', SubmitType::class, [
                'label' => 'Enviar',
                'attr' => ['class' => 'submit'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
