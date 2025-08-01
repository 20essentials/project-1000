import '@/components/pages/Login/Login.css';
import { $ } from '@/utils/functions';
import { Google } from '@/components/pages/Login/Google';
import { Twitch } from '@/components/pages/Login/Twitch';
import { GitHub } from '@/components/pages/Login/GitHub';

function openGoogle() {
  const $buttonGoogle = $('.cl-button__google') as HTMLButtonElement;
  $buttonGoogle.click();
}

function openGithub() {
  const $buttonGithub = $('.cl-button__github') as HTMLButtonElement;
  $buttonGithub.click();
}

function openTwitch() {
  const $buttonTwitch = $('.cl-button__twitch') as HTMLButtonElement;
  $buttonTwitch.click();
}

export function Login() {
  return (
    <article className='login'>
      <h2>Login For TikTok</h2>
      <p>
        Create a profile, follow other accounts, make your own videos, and more.
      </p>
      <button onClick={() => openGoogle()}>
        <Google className='logito google' /> Continue With Google
      </button>
      <button onClick={() => openTwitch()}>
        <Twitch className='logito twitch' /> Continue With Twitch
      </button>
      <button onClick={() => openGithub()}>
        <GitHub className='logito github' /> Continue With GitHub
      </button>
      <footer>
        By continuing, you agree to TikTok's <output>Terms of Use</output> and
        confirm that you have TikTok's <output>Privacy Policy</output>
      </footer>
    </article>
  );
}
