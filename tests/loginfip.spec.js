import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  await page.getByRole('textbox', { name: 'Email institucional' }).click();
  await page.getByRole('textbox', { name: 'Email institucional' }).fill('brunonf15@gmail.com');
  await page.getByRole('textbox', { name: 'Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Email institucional' }).fill('brunonf15@gmail.com');
  await page.getByRole('textbox', { name: 'Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha' }).fill('Pa$$w0rd!');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(page.getByRole('navigation').getByRole('link').first()).toBeVisible();
  await page.getByRole('navigation').getByRole('link').first().click();
});