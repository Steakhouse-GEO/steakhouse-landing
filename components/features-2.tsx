import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ClockIcon, Settings2, Sparkles, WorkflowIcon, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Makes your life easier</h2>
                    <p className="mt-4">Let SteakHouse handle the heavy lifting so you can focus on what matters most.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <WorkflowIcon
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-bold text-xl">Automate</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Auto-generate, structure, and publish optimized content at the click of a button.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-bold text-xl">Optimize</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Optimize your content for GEO, readability, and engagement.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-bold text-xl">Powered by Gemini Pro 3</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">The most powerful AI model that also understands Google's search dynamics.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
