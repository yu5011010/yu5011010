"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Mail, MessageSquare, Clock, Smartphone, FileText, Repeat, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// カスタムブレークポイントのためのユーティリティ
const useCustomBreakpoints = () => {
  return {
    xs: "480px",
  }
}

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-3"
            >
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl/none leading-tight">
                  無料でプロフェッショナルな
                  <br className="hidden xs:inline" />
                  ウェブサイトを制作
                </h1>
                <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl">
                  高校生の情熱と技術で、あなたのビジネスやプロジェクトをウェブ上で輝かせます。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row mt-2 gap-2 sm:gap-3">
                <Button asChild size="lg" className="w-full sm:w-auto gap-1">
                  <Link href="#contact">
                    お問い合わせ <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="#process">制作の流れを見る</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto lg:mr-0 relative mt-6 lg:mt-0"
            >
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-primary opacity-50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 sm:py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">サービス内容</h2>
              <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                あなたのニーズに合わせた、高品質なウェブサイト制作サービスを提供します。
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-8 md:mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    ページ内容
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    ホームページ / LP（1ページ構成）など、ご要望に応じて柔軟に対応します。
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    スマホ対応
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    スマートフォンやタブレットでも見やすい、レスポンシブデザインを採用しています。
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    構成・文章作成
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    ご希望がなければこちらでご提案いたします。効果的な構成と文章で魅力を伝えます。
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Repeat className="h-5 w-5 text-primary" />
                    修正対応
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    ご希望に応じて柔軟に対応します（回数制限なし）。納得いくまで調整いたします。
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    納期
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>約2週間前後（ご相談可）。スケジュールに合わせて調整いたします。</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    連絡方法
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    メールでのやり取りのみ（丁寧・迅速を心がけています）。ご質問にも迅速に対応します。
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">制作の流れ</h2>
              <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                シンプルな4ステップで、あなたの理想のウェブサイトを制作します。
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:gap-8 mt-6 sm:mt-8 md:mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">メールでご相談</h3>
                <p className="text-muted-foreground">
                  「こんなサイトを作りたい」など簡単な内容で大丈夫です！まずはお気軽にご連絡ください。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">ヒアリング（文章・雰囲気など）</h3>
                <p className="text-muted-foreground">
                  やりとりを通してご希望を丁寧に伺います。理想のサイトイメージを共有してください。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">制作開始（随時ご確認いただきながら）</h3>
                <p className="text-muted-foreground">
                  修正・調整も柔軟に対応します。進捗状況を定期的に共有し、ご意見を反映していきます。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">完成 → 納品（or 公開サポート）</h3>
                <p className="text-muted-foreground">
                  完成したサイトをご確認いただき、必要に応じて公開のサポートも行います。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto lg:ml-0 relative order-2 lg:order-1"
            >
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-primary opacity-50" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-4 order-1 lg:order-2"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">制作している人について</h2>
                <p className="text-muted-foreground md:text-xl">高校2年生</p>
                <p className="text-muted-foreground">
                  Web制作はまだまだ勉強中ですが、丁寧に取り組んでいます。「やってみたい」「やってみるからこそ成長できる」という気持ちで活動中です。
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">使用しているツールや技術（裏側）</h3>
                <p className="text-muted-foreground">
                  V0 / Bolt / HTML / CSS などを使って、サイトを形にしています。※わかりにくいことがあれば、説明もします！
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section id="why-free" className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center space-y-3 sm:space-y-4"
          >
            <Gift className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              なぜ無料でやっているの？
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground md:text-xl">
              「高校生の自分でも、できることで社会に貢献したい」
              <br />
              「Webで誰かの役に立つ経験がしたい」
              <br />
              <br />
              そんな思いから、今は完全無料で対応しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                ご相談・ご依頼はこちらから！
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                お気軽にご連絡ください。どんな内容でも構いません。
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-md mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 bg-card rounded-lg shadow-sm"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <Mail className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">メールでお気軽にご連絡ください</h3>
              <p className="text-xl font-medium">yourmail@example.com</p>
              <p className="text-muted-foreground">
                「こんなサイト作れる？」「相談だけでも大丈夫？」など、どんな内容でも構いません。お気軽にどうぞ！
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-muted-foreground">🌈 一歩を、いっしょに踏み出しましょう。</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                まだまだ未熟なところもありますが、ひとつひとつ丁寧に、心を込めて制作させていただきます。
                <br className="hidden sm:inline" />
                あなたの活動や想いを、Webで「伝わるカタチ」にするお手伝いができたら幸いです。
              </p>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 無料ウェブサイト制作サービス. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

