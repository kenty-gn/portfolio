"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactFormResult {
    success: boolean;
    message: string;
}

export async function sendContactEmail(
    data: ContactFormData
): Promise<ContactFormResult> {
    // バリデーション
    if (!data.name || !data.email || !data.subject || !data.message) {
        return {
            success: false,
            message: "すべての項目を入力してください。",
        };
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return {
            success: false,
            message: "有効なメールアドレスを入力してください。",
        };
    }

    try {
        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL || "sawayakakenty@gmail.com",
            replyTo: data.email,
            subject: `【お問い合わせ】${data.subject}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            新しいお問い合わせがあります
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 100px;">
                お名前
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                ${data.name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
                メール
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
                件名
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                ${data.subject}
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #374151;">メッセージ</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
${data.message}
            </div>
          </div>
          
          <p style="margin-top: 30px; color: #6b7280; font-size: 12px;">
            このメールはポートフォリオサイトのお問い合わせフォームから送信されました。
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return {
                success: false,
                message: "メールの送信に失敗しました。しばらく経ってから再度お試しください。",
            };
        }

        return {
            success: true,
            message: "お問い合わせを送信しました。ご連絡ありがとうございます！",
        };
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message: "エラーが発生しました。しばらく経ってから再度お試しください。",
        };
    }
}
